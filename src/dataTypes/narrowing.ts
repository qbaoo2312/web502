// 1. Union type
// typeof
function print1(a: string | number){
    if(typeof a === 'string'){
        return a.toUpperCase()
    }
    return a
}

// 2. Optional
function opionalFunc(sinhvien?: {name: string, age: number}){
    if(sinhvien){
        return sinhvien.name
    }
}

opionalFunc()

// 3. In
interface User {
    username: string,
    password: string,
    email: string,
}

enum ROLE{STAFF, MANAGER}

interface Admin extends User {
    is_admin: boolean,
    role: ROLE.STAFF | ROLE.MANAGER
}

function login(user: User | Admin) {
    if("is_admin" in user) {
        console.log("Welcome to Admin"); 
    } else {
        console.log("Welcome back!");
        
    }
}