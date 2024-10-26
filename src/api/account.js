import service from '@/unilt/requirst'

export function deviceList(data){
    return service({
        url:'/deviceList',
        method:'get',
        data
    })
}
export function userLogin(data){
    return service({
        url:'/api/login',
        method:'post',
        data
    })
}