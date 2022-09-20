import http from "../utlis/request"
export const login = (data) => {
    return http({
        url: "user/login",
        data,
        method: "post"
    })
}