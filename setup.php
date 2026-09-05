<?php

use Glpi\Plugin\Hooks;

define('PLUGIN_RDSUSERDISPLAY_VERSION', '1.0.0');
define('PLUGIN_RDSUSERDISPLAY_MIN_GLPI', '11.0.0');
define('PLUGIN_RDSUSERDISPLAY_MAX_GLPI', '11.0.99');

function plugin_init_rdsuserdisplay(): void
{
    global $PLUGIN_HOOKS;

    $PLUGIN_HOOKS['csrf_compliant']['rdsuserdisplay'] = true;

    if (Plugin::isPluginActive('rdsuserdisplay')) {
        $PLUGIN_HOOKS[Hooks::ADD_JAVASCRIPT]['rdsuserdisplay'][] =
            'js/rdsuserdisplay.js';
    }
}

function plugin_version_rdsuserdisplay(): array
{
    return [
        'name'    => 'RDSUserDisplay',
        'version' => PLUGIN_RDSUSERDISPLAY_VERSION,
        'author'  => 'Bluelan AB',
        'license' => 'GPLv3+',
        'homepage' => 'https://github.com/bluemarb/glpi-rds-user-display',
        'requirements' => [
            'glpi' => [
                'min' => PLUGIN_RDSUSERDISPLAY_MIN_GLPI,
                'max' => PLUGIN_RDSUSERDISPLAY_MAX_GLPI,
            ],
        ],
    ];
}

function plugin_rdsuserdisplay_check_prerequisites(): bool
{
    return true;
}

function plugin_rdsuserdisplay_check_config(bool $verbose = false): bool
{
    return true;
}
