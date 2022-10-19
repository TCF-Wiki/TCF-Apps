async function get_mission_data() {
    const response = await fetch('https://raw.githubusercontent.com/TCF-Wiki/TCF-Information/main/allMissions.json', {});
    const json = await response.json();

    return json
}

export const missionData = await get_mission_data();

