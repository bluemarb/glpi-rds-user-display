/*
 * RDSUserDisplay
 * Bluelan AB
 *
 * Visar flera Alternate Username på separata rader i datorlistan.
 *
 * Exempel:
 *   Administrator@DOMAIN/user1@DOMAIN/user2@DOMAIN
 *
 * visas som:
 *   Administrator@DOMAIN
 *   user1@DOMAIN
 *   user2@DOMAIN
 *
 * Endast presentationen ändras.
 * Ingen GLPI-data eller inventory-data modifieras.
 */

(function () {
    'use strict';

    function formatAlternateUsernames() {
        document.querySelectorAll('table').forEach((table) => {
            const headers = Array.from(table.querySelectorAll('thead th'));

            const alternateUsernameIndex = headers.findIndex(
                (header) =>
                    header.innerText.trim().toUpperCase() === 'ALTERNATE USERNAME'
            );

            if (alternateUsernameIndex === -1) {
                return;
            }

            table.querySelectorAll('tbody tr').forEach((row) => {
                const cells = row.querySelectorAll('td');

                if (!cells[alternateUsernameIndex]) {
                    return;
                }

                const cell = cells[alternateUsernameIndex];

                // Om vi redan har formaterat cellen behöver inget göras.
                if (cell.querySelector('br')) {
                    return;
                }

                const value = cell.textContent.trim();

                // Vanliga datorer med bara en användare lämnas orörda.
                if (!value.includes('/')) {
                    return;
                }

                const users = value
                    .split('/')
                    .map((user) => user.trim())
                    .filter((user) => user.length > 0);

                if (users.length < 2) {
                    return;
                }

                cell.replaceChildren();

                users.forEach((user, index) => {
                    if (index > 0) {
                        cell.appendChild(document.createElement('br'));
                    }

                    cell.appendChild(document.createTextNode(user));
                });
            });
        });
    }

    // Första visningen.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', formatAlternateUsernames);
    } else {
        formatAlternateUsernames();
    }

    // GLPI uppdaterar listor dynamiskt vid t.ex. sökning och sidbyte.
    const observer = new MutationObserver(() => {
        formatAlternateUsernames();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
