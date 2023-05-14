const token = localStorage.getItem("token");
const testRole = localStorage.getItem("testRole");

export function hasJWT() {
    return token !== null && testRole !== null;
}

function getTestRole() {
    return testRole;
}