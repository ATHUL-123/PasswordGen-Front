export const userUrl={
    register : `/api/register`,
    login    :`/api/login`,
    generate :`/api/generate`,
    savePassword:`/api/save`,
    fetchSaved:`/api/fetchsaved`,
    removeSaved:(removeId)=>`/api/removeSaved/${removeId}`
}