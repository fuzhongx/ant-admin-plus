import service from "@/unilt/requirst";

export function deviceListCom(prarms){
    return service({
        url:'/device?deviceName=&pageNum=1&pageSize=10',
        method:'get',
        prarms
    })
}