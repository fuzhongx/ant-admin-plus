import service from "@/unilt/requirst";

export function userList(prarms){
    return service({
        url:'/user?userName=&tel=&pageNum=1&pageSize=10&role=',
        method:'get',
        prarms
    })
}

export function roleList(prarms){
    return service({
        url:'/role?roleName=&pageNum=1&pageSize=10',
        method:'get',
        prarms
    })
}

export function  addRole(data){
    return service({
        url:'/role',
        method:'post',
        data
    })
}
export function deleteRole(data){
    return service({
        url:'/role',
        method:'delete',
        data
    })
}
export function Roles(data){
    return service({
        url:'/roleList/'+`${id}`,
        method:'get',
        data
    })
}
export function selectRole(prarms){
    return service({
        url:"/role?userName=&tel=&pageNum=1&pageSize=10&role=",
        method:'get',
        prarms
    })
}