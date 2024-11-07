import service from "@/unilt/requirst";

export function userList(prarms){
    return service({
        url:'/user?userName=&tel=&pageNum=1&pageSize=10&role=',
        method:'get',
        prarms
    })
}