export function englishLevel(index) {
  return [
    {
      caption: i18n('english_level.0.caption'),
      tooltip: i18n('english_level.0.tooltip'),
    },
    {
      caption: i18n('english_level.1.caption'),
      tooltip: i18n('english_level.1.tooltip'),
    },
    {
      caption: i18n('english_level.2.caption'),
      tooltip: i18n('english_level.2.tooltip'),
    },
    {
      caption: i18n('english_level.3.caption'),
      tooltip: i18n('english_level.3.tooltip'),
    },
    {
      caption: i18n('english_level.4.caption'),
      tooltip: i18n('english_level.4.tooltip'),
    },
    {
      caption: i18n('english_level.5.caption'),
      tooltip: i18n('english_level.5.tooltip'),
    },
  ][index];
}

export function experience(index) {
  return [
    i18n('experience.0'),
    i18n('experience.1'),
    i18n('experience.2'),
    i18n('experience.3'),
    i18n('experience.4'),
    i18n('experience.5'),
    i18n('experience.6'),
    i18n('experience.7'),
    i18n('experience.8'),
    i18n('experience.9'),
    i18n('experience.10'),
    i18n('experience.11'),
    i18n('experience.12'),
    i18n('experience.13'),
    i18n('experience.14'),
  ][index];
}

export function employmentOptions() {
  return [
    {
      label: i18n('employment.options.in_house'),
      value: 'in_house',
    },
    {
      label: i18n('employment.options.remote'),
      value: 'remote',
    },
    {
      label: i18n('employment.options.freelance'),
      value: 'freelance',
    },
    {
      label: i18n('employment.options.relocate_to_another_city'),
      value: 'relocate_to_another_city',
    },
    {
      label: i18n('employment.options.relocate_to_usa_or_europe'),
      value: 'relocate_to_usa_or_europe',
    },
  ];
}
