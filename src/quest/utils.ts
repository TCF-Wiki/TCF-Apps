import { locationData } from "./data"
import { creatureNames } from "./QuestConstants"

export function locationNameManager(name: string) : string {
    // Utility function to get the name of a location by its codename
    if (name=="") return ""
    name = name
        // edge cases
        .replace('Map',"MAP")
        .replace('StarportPad', 'StarportLandingPad')
        .replace("VaccineLabs",'VaccineLab')
        .replace('JungleFallenTree','FallenTree')
        .replace('JungleFavela','Favela')
        .replace('SkeletonObservation','SkeletonObservatory')
        .replace('AlienQuarry','CrystalCave')
        .replace('LetiumLocations','Letium Vent')
        .replace('PowerPlant','Powerplant')
        .replace('OsirisWildlife','Wildlife')
        .replace('KorolevOutpost2','KorolevCoreOutpost')
        .replace('OsirisOutpost2','OsirisOffices')
        .replace('GlowingWaterCave','SparklingWaters')
        .replace('DesertPinnacleLabs','PinnacleLabs')
        .replace('UniqueMissionLocation_','')
        .replace('SlaughteredResearcher','Osiris Offices')
        .replace('AbandonedOilField','Abandoned Oil Field')
        .replace('AroundMissingEngineerBody', 'the Missing Engineer')
        .replace('MAP01_EastKorolevStation_PowerUpLoot',"East Collection Point Loot Room")
        .replace('GlowWormCave','CaveofStars')

    if (locationData[name]) return locationData[name]['name']
    
    return name
}

export function mapNameManager(name: string) : string {
    // Utility function to get the name of a map by its codename
    if (name=="") return ""
    if (name == "MP_Map01_P") return "Bright Sands"
    if (name == "MP_Map02_P") return "Crescent Falls"
    if (name == "MP_AlienCaverns_P") return 'Tharis Island'
    return name
}

export function killCreatureOrPlayer(task: any) : string {
    // type of kill
    let killType = task['killConditions']['m_killTarget']
    let creature : string = task['killConditions']['m_specificAIEnemyTypeToKill'].replace('EYEnemyType::','') 

    // set up the name of the target
    if (killType.includes('Players')) {
        creature = 'Player'
    } else if(creature == 'None' || !creature) {
        creature = 'Creature'
    } else {
        creature = creatureNames[creature]
    }

    if (task['maxProgress'] > 1) creature += 's'

    // set up our conditional locations
    let location = '';
    let map = ''
    if (task['locationConditions']) {
        location = locationNameManager(task['locationConditions'])
    } else if (task['killConditions']['m_mapName']){
        map = mapNameManager(task['killConditions']['m_mapName'])
    } 


    let returnInfo = 'Kill ' + task['maxProgress'] + ' ' + creature
    if (task['killConditions']['m_onlyDuringStorm']) returnInfo += ' during storm'
    if (location) returnInfo += ` at ${location}`
    if (map) returnInfo += ` on ${map}`

    return returnInfo
}