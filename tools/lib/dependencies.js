const DependencyResolver = require('dependency-resolver');

/**
 * Reorders languages, moving dependencies above the languages
 * that depend on them.
 *
 * @param {array<Language>} languages list of languages to be reordered
 * @returns {array<Language>} ordered list of languages
*/

const reorderDependencies = (languages) => {
  const resolver = new DependencyResolver();
  for (const lang of languages) {
    resolver.add(lang.name);
    for (const required of lang.requires) {
      if (!required) {
        throw new Error(`Erroneous 'requires' language set '${lang.requires}' for language '${lang.name}': please fix its definition.`);
      }
      resolver.setDependency(lang.name, required);
    }
  }
  const rv = resolver.sort().map((name) => {
    const rv = (languages.find((l) => l.name === name));
    if (!rv) {
      for (const lang of languages) {
        for (const required of lang.requires) {
          if (required === name) {
            throw new Error(`Language '${name}' is not defined, yet required by the '${lang.name}' language definition file. Please fix this omission.`);
          }
        }
      }
      throw new Error(`Language '${name}' is not defined, yet required by another language definition file. Please fix this omission.`);
    }
    return rv;
  }
  );
  return rv;
};

/**
 * Filters languages by group (common, etc)
 *
 * Groups are currently defined inside each language file with `Category`
 *
 * @param {array<Language>} languages full list of languages
 * @returns {array<Language>} filtered list
*/

const languagesByGroup = (languages, groupIdentifier) => {
  const groupName = groupIdentifier.replace(":", "");
  return languages.filter((el) => el.categories.includes(groupName));
};
// :common is a group identifier, "common" is the group name
const isGroup = (id) => id[0] === ":";

/**
 * Filters languages by a list of languages or categories
 *
 * This also resolves any requires and dependency ordering issues.
 * The returned list can be registered sequentially and should "just work".
 *
 * @param {array<Lanuage>} allLanguages - full list of languages
 * @param {array<name|group_name>} includes - which languages or groups to include
 *   example: ":common elixir ruby"
 * @returns {array<Language>} filtered list if languages
*/
const filter = (allLanguages, includes) => {
  if (includes == null || includes.length === 0) {
    return reorderDependencies(allLanguages);
  }

  let languages = [];
  for (const item of includes) {
    if (isGroup(item)) {
      languages = languages.concat(languagesByGroup(allLanguages, item));
    } else {
      const languageName = item;
      const found = allLanguages.find((el) => el.name === languageName);
      if (found) {
        languages.push(found);
      } else {
        console.error(`[ERROR] Language '${languageName}' could not be found.`);
        process.exit(1);
      }
    }
  }

  // resolve requires
  for (const lang of languages) {
    lang.requires.forEach(needed => {
      if (!languages.find((el) => el.name === needed)) {
        console.info(`[INFO] Adding ${needed}... ${lang.name} requires ${needed}.`);
        languages.push(allLanguages.find((el) => el.name === needed));
      }
    });
  }

  // make sure our dependencies are in the correct order
  return reorderDependencies(languages);
};

module.exports = { reorderDependencies, filter };
