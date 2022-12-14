import {githubURL} from '../constants.json';

async function get_mission_data() {
    const response = await fetch(githubURL + 'allMissions.json', {});
    const json = await response.json();

    return json;
}

export const missionData = await get_mission_data();

async function get_string_tables() {
    const response = await fetch(githubURL + 'stringTables.json');
    const json = await response.json();

    return json;
}

export const stringTables = await get_string_tables();

async function get_locations() {
    const response = await fetch(githubURL + 'locations.json');
    const json = await response.json();

    return json;
}

export const locationData = await get_locations();

async function get_tech_tree() {
    const response = await fetch(githubURL + 'personalQuarterTechTreeUpgrades.json');
    const json = await response.json();

    return json;
}

export const techTreeData = await get_tech_tree();

async function get_tech_levels() {
    const response = await fetch(githubURL + 'personalQuarterLevelUpgrades.json');
    const json = await response.json();

    return json;
}

export const techLevelsData = await get_tech_levels();
