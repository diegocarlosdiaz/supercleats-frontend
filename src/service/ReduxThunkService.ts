import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDelete, axiosGet, axiosPost, axiosPut } from './ApiService';

interface HttpAsyncThunkProps {
    id?: string | string[];
    item?: any;
    queryParams?: any;
}
export function createHttpAsyncThunk(type: string, method: string, url: string) {
    return createAsyncThunk(type, async (props: HttpAsyncThunkProps = {}, thunkApi) => {
        try {
            let response;
            const { id, item, queryParams } = props;
            console.log("id",id)
            console.log("queryParams", queryParams)
            switch (method) {
                case 'get':
                    response = axiosGet(id ? `${url}/${id}` : queryParams ? `${url}?${queryParams}` : url);
                    break;
                case 'post':
                    response = axiosPost(`${url}`, item);
                    break;
                case 'put':
                    response = axiosPut(`${url}/${item.id}`, item);
                    break;
                case 'delete':
                    response = axiosDelete(`${url}/${id}`);
                    break;
                default:
                    throw new Error("Metodo invalido");
            }
            return response;
        } catch (error) {
            throw error
        }
    })
}