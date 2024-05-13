# Changelog

## 3.0.0 - 2024-05-13

### Changed
- Now requires PHP `8.2.0+`.
- Now requires Craft `5.0.0+`.

### Fixed
- Fix a compatibility issue with Formie and Entries fields.

## 2.0.5 - 2023-08-03

### Fixed
- Fix multi-site singles not appearing.

## 2.0.4 - 2023-07-21

### Fixed
- Fix an issue where disabled singles weren't shown, after 2.0.3. (thanks @janhenckens).

## 2.0.3 - 2023-07-17

### Fixed
- Fix “Redirect to Entry” not working correctly.

## 2.0.2 - 2023-07-11

### Added
- Add support for CKEditor plugin.

### Changed
- Improve performance of element index.

## 2.0.1 - 2023-03-10

### Changed
- Only admins are now allowed to access plugin settings.

### Fixed
- Fix an error on Craft 4.4+ where singles won’t appearing.

## 2.0.0 - 2022-07-10

### Added
- Add checks for registering events for performance.

### Changed
- Now requires PHP `8.0.2+`.
- Now requires Craft `4.0.0+`.
- Rename base plugin methods.

## 1.2.0 - 2022-03-02

### Changed
- Now requires Craft 3.5+.

### Fixed
- Fix redirect to entry option not working for multi-sites where users didn't have access to the primary site.

## 1.1.6 - 2022-03-02

### Fixed
- Fix an error on Craft 3.4, introduced in 1.1.5.

## 1.1.5 - 2021-12-31

### Fixed
- Fix redirect to entry option not working for multi-sites where users didn't have access to the primary site.

## 1.1.4 - 2021-06-20

### Changed
- Improve performance of generating singles list when called multiple times.

## 1.1.3 - 2020-07-27

### Fixed
- Fix duplicate sidebar entry with "Redirect to Entry" set to true.

## 1.1.2 - 2020-04-16

### Fixed
- Fix logging error `Call to undefined method setFileLogging()`.

## 1.1.1 - 2020-04-15

### Changed
- File logging now checks if the overall Craft app uses file logging.
- Log files now only include `GET` and `POST` additional variables.

## 1.1.0 - 2020-04-01

### Changed
- Now requires Craft 3.4+.

## 1.0.11 - 2020-02-28

### Fixed
- Fix PHP error (again).
- Even more refactoring and cleanup JS/CSS.

## 1.0.10 - 2020-02-28

### Changed
- Refactor and cleanup JS/CSS.
- Add some debug statements.

### Fixed
- Fix PHP error.
- Fix minor styling caused by new overlay.

## 1.0.9 - 2020-02-11

### Changed
- Ensure URL to single redirect is correct on multisite. (thanks @andersaloof)

## 1.0.8 - 2020-02-05

### Added
- Add override notice for settings fields.

### Changed
- Change behaviour of “Redirect to Entry”, now using an overlay to retain normal element index filtering.

### Fixed
- Fix redactor singles not being site-aware.
- Be sure to include siteIds in single data for filtering.
- Ensure site filtering works with “Redirect to Entry” set.

## 1.0.7 - 2019-02-09

### Fixed
- Fix JS showing for non-CP requests.

## 1.0.6 - 2019-01-18

### Fixed
- Fixed non-admins not seeing expanded singles due to Craft 3.1 changes in permission filtering from id's to uid's.
- Now requires Craft 3.1+.

## 1.0.5 - 2018-10-24

### Fixed
- Better support multi-site enabled singles

## 1.0.4 - 2018-07-04

### Fixed
- Fix error caused by permissions to view singles

## 1.0.3 - 2018-02-20

### Fixed
- Fix error when the Redactor plugin isn’t installed

## 1.0.2 - 2018-02-12

### Added
- Added support for Redactor fields

### Fixed
- Update Craft CMS requirements
- Fix error when selecting an expanded single from a modal window

## 1.0.1 - 2017-12-07

### Changed
- Updated for Craft 3 RC1.

## 1.0.0 - 2017-10-18

### Added
- Craft 3 initial release.

## 0.2.5 - 2017-10-17

### Added
- Verbb marketing (new plugin icon, readme, etc).

### Changed
- Improve link hijacking.
- Allow functionality on element modal.

### Fixed
- Fix to work with multi-locales.

## 0.2.4 - 2017-01-23

### Changed
- Adding check to see if user can edit a particular single before adding that single to the list for display. Thanks to [@aberkie](https://github.com/aberkie).

## 0.2.3 - 2016-02-20

### Fixed
- Fixed issue when disabling a single, it would disappear from the sidebar in Entries Index [#2](https://github.com/engram-design/ExpandedSingles/issues/2).

## 0.2.2 - 2016-01-13

### Fixed
- Fixed issue with plugin release feed url.

## 0.2.1 - 2015-11-20

### Changed
- Removed plugin description (doesn't look great).

## 0.2.0 - 2015-11-20

### Changed
- Craft 2.5 compatibility, including plugin feed.
- Cleanup/organise code.

## 0.1.0 - 2015-06-06

- Initial commit
