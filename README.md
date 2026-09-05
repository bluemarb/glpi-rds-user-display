# RDSUserDisplay

A lightweight GLPI plugin that improves how multiple RDS users are displayed
in computer listings.

## Purpose

Improves the display of the "Alternate Username" column in the
GLPI computer list.

GLPI Agent may report multiple logged-in users on an RDS server as:

    Administrator@DOMAIN/user1@DOMAIN/user2@DOMAIN

RDSUserDisplay displays these as:

    Administrator@DOMAIN
    user1@DOMAIN
    user2@DOMAIN

## Function

- Only changes presentation in the GLPI web interface.
- Does not modify GLPI inventory data.
- Does not modify the GLPI database.
- Does not modify GLPI Agent data.
- Does not modify GLPI core files.
- Computers with only one Alternate Username are unaffected.
- The Alternate Username column is identified by its column heading,
  rather than by a fixed column position.
- Uses a MutationObserver so dynamically refreshed GLPI lists are
  formatted as well.

## Compatibility

Developed and tested with:

- GLPI 11.0.8
- Docker image: glpi/glpi:11.0.8

## Installation

Extract the archive so that the plugin directory is named exactly:

    /var/www/glpi/plugins/rdsuserdisplay

For other installations, place `rdsuserdisplay` in the GLPI plugins directory.
Then install and enable **RDSUserDisplay** from:

    Setup -> Plugins -> RDSUserDisplay

## Version

1.0.0

## Author

Bluelan AB
