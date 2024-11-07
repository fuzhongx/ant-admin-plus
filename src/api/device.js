import service from "@/unilt/requirst";

export function deviceListCom(prarms){
    return service({
        url:'/device?deviceName=&pageNum=1&pageSize=10',
        method:'get',
        prarms
    })
}
export function deleteDevice(prarms){
    return service({
        url:'/device',
        method:'put',
        prarms
    })
}

export function putDevice(data){
    return service({
        url:'/device',
        method:'delete',
        data
    })
}
export function addDevice(data){
    return service({
        url:'/device',
        method:'post',
        data
    })
}