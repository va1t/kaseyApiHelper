import axios from 'axios'

const uri = false
const bearerToken = false

const config = {
    headers: {'Authorization': "bearer " + bearerToken}
};

const kaseyaPostPayload = (postUri, payload, cb) => {
    axios.post(ur + postUri, payload, config)
    .then( (data) => {
        console.log(data)
        let cbPayload = {
            error: false,
            data: data
        }
        cb(cbPayload)
    })
    .catch( (err) => {
        console.log(err)
        let cbPayload = {
            error: true,
            data: data
        }
        cb(cbPayload)
    })
}

const kaseyaGetPayload = (postUri, cb) => {
    axios.get(uri + postUri, config)
    .then( (data) => {
        console.log(data)
        let payload = {
            error: false,
            data: data
        }
        cb(payload)
    })
    .catch( (err) => {
        console.log(err)
        let payload = {
            error: true,
            data: data
        }
        cb(payload)
    })
}

const kaseyaPutPayload = (putUri, cb) => {
    axios.put(uri + postUri, config)
    .then( (data) => {
        console.log(data)
        let payload = {
            error: false,
            data: data
        }
        cb(payload)
    })
    .catch( (err) => {
        console.log(err)
        let payload = {
            error: true,
            data: data
        }
        cb(payload)
    })    
}

const kaseyaDeletePayload = (deleteUri, cb) => {
    axios.delete(uri + postUri, config)
    .then( (data) => {
        console.log(data)
        let payload = {
            error: false,
            data: data
        }
        cb(payload)
    })
    .catch( (err) => {
        console.log(err)
        let payload = {
            error: true,
            data: data
        }
        cb(payload)
    }) 
}

const addMachineGroups = (MachineGroupId, MachineGroupName, ParentMachineGroupId, Attributes) => {
    const postUri = '/system/orgs/' + orgId + '/machinegroups'

    payload = {
        MachineGroupId: MachineGroupId,
        MachineGroupName: MachineGroupName,
        ParentMachineGroupId: ParentMachineGroupId,
        orgId: orgId,
        Attributes: Attributes    
    }

    kaseyaPostPayload(postUri, payload, (data) => {
        return data
    })
}

const addOrganization = () => {
    const postUri = '/system/orgs'

    payload = {

    }

    kaseyaPostPayload(postUri, payload, (data) => {
        return data
    })
}

const getAgents = (orgId) => {
    const postUri = '/assetmgmt/agents'

    kaseyaGetPayload(postUri, (agents) => {
        if(agents.err) {
            return data
        } else {
            let payload = {
                error: agents.error,
                data: []
            }

            for(agent in agents) {
                if(agent.orgId === orgId) {
                    payload.data.push(agent)
                }
            }
            return payload
        }
    })
}

const postAgentPatchScan = (agentId) => {
    const postUri = '/assetmgmt/patch/' + str(agentId) + '/scannow'

    kaseyaPostPayload(postUri, {}, (data) => {
        return data
    })
}

const getAgentPatchStatus = (agentId) => {
    const getUri = '/assetmgmt/patch/' + str(agentId) + '/status'
    
    kaseyaGetPayload(getUri, (data) => {
        return data
    })   
}

const getAgentMissingPatches = (agentId) => {
    const getUri = '/assetmgmt/patch/' + str(agentId) + '/machineupdate/1'

    kaseyaGetPayload(getUri, (data) => {
        return data
    })
}

const getAgentPatchHistory = (agentId) => {
    const getUri = '/assetmgmt/patch/' + str(agentId) + '/history'

    kaseyaGetPayload(getUri, (data) => {
        return data
    }) 
}

const deleteAgent = (agentId) => {
    const deleteUri = '/assetmgmt/agents/' + str(agentId) + '/0'

    kaseyaDeletePayload(deleteUri, (data) => {
        return data
    })
}

const putRenameAgent = (agentId, newName) => {
    const putUri = '/assetmgmt/agents/' + str(agentId) + '/rename/' + str(newName)

    kaseyaPutPayload(putUri, (data) => {
        return data
    })
}

const getAgentsUptime = () => {
    let now = new Date().toISOString()
    getUri = '/assetmgmt/agents/uptime/' + now

    kaseyaGetPayload(getUri, (data) => {
        return data
    })
}

const putRunPatchUpdate = () => {
    const putUri = '/assetmgmt/patch/runnow'

    kaseyaPutPayload(putUri, (data) => {
        return data
    })
}

const deleteScheduledPatch = (agentId) => {
    const deleteUri = '/assetmgmt/patch/' + str(agentId) + '/cancelschedule'

    kaseyaDeletePayload(deleteUri, (data) => {
        return data
    })
}

const putSetPatchIgnore = (agentId, patchIdArray) => {
    const postUri = '/assetmgmt/patch/' + str(agentId) + '/setignore'

    kaseyaPostPayload(postUri, patchIdArray, (data) => {
        return data
    })   
}

const deleteSetPatchIgnore = (agentId, patchId) => {
    const deleteUri = '/assetmgmt/patch/' + str(agentId)+ '/' + str(patchId) + '/setignore'

    kaseyaDeletePayload(deleteUri, (data) => {
        return data
    })
}

const getAgentInstallPackages = () => {
    getUri = '/assetmgmt/assets/packages'

    kaseyaGetPayload(getUri, (data) => {
        return data
    })
}

const postAgentInstallPackages = () => {
    postUri = '/assetmgmt/assets/packages'

    kaseyaPostPayload(postUri, (data) => {
        return data
    })
}

const deleteAgentInstallPackages = (packageId) => {
    deleteUri = '/assetmgmt/assets/packages/' + str(packageId)

    kaseyaDeletePayload(deleteUri, (data) => {
        return data
    })
}

const postCreateAgentInstallLinkForMachineGroup = () => {
    postUri = '/agent/packagelink'

    kaseyaPostPayload(postUri, (data) => {
        return data
    })   
}

const getAgentCustomFields = (agentId) => {
    getUri = '/assetmgmt/assets/' + str(agentId) + '/customfields'

    kaseyaGetPayload(postUri, (data) => {
        return data
    })
}

const postAgentCustomFields = () => {
    postUri = '/assetmgmt/assets/customfields'

    kaseyaPostPayload(postUri, (data) => {
        return data
    })
}

const putUpdateAgentCustomFieldName = () => {
    putUri = '/assetmgmt/assets/customfields'

    kaseyaPutPayload(putUri, (data) => {
        return data
    })
}

const putUpdateAgentCustomFieldValue = (agentId, fieldName) => {
    putUri = '/assetmgmt/assets/' + str(agentId) + '/customfields/' + str(fieldName)

    kaseyaPutPayload(putUri, (data) => {
        return data
    })
}

const deleteAgentCustomField = (fieldName) => {
    deleteUri = '/assetmgmt/assets/customfields/' + str(fieldName)

    kaseyaDeletePayload(deleteUri, (data) => {
        return data
    })
}

 
Modules.exports = {
    putUpdateAgentCustomFieldValue: putUpdateAgentCustomFieldValue,
    deleteAgentCustomField: deleteAgentCustomField,
    putUpdateAgentCustomFieldName: putUpdateAgentCustomFieldName,
    postAgentCustomFields: postAgentCustomFields,
    getAgentInstallPackages: getAgentInstallPackages,
    postAgentInstallPackages: postAgentInstallPackages,
    deleteAgentInstallPackages: deleteAgentInstallPackages,
    postCreateAgentInstallLinkForMachineGroup: postCreateAgentInstallLinkForMachineGroup,
    getAgentCustomFields: getAgentCustomFields,
    addMachineGroups: addMachineGroups,
    addOrganization: addOrganization,
    getAgents: getAgents,
    postAgentPatchScan: postAgentPatchScan,
    getAgentPatchStatus: getAgentPatchStatus,
    getAgentMissingPatches: getAgentMissingPatches,
    putRunPatchUpdate, putRunPatchUpdate,
    deleteScheduledPatch: deleteScheduledPatch,
    putSetPatchIgnore: putSetPatchIgnore,
    deleteSetPatchIgnore: deleteSetPatchIgnore,
    getAgentPatchHistory: getAgentPatchHistory,
    deleteAgent: deleteAgent,
    putRenameAgent: putRenameAgent,
    getAgentsUptime: getAgentsUptime
}