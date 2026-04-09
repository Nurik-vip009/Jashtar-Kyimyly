// ВНИМАНИЕ: Проверь этот путь. Если файл apiclient лежит в src/app/api,
// а этот файл в src/widgets/Footer/api, то путь именно такой:
import { axiosInstance } from "../../../app/api/apiclient";

export interface IFooterData {
	id: number;
	site_name: string;
	logo: string;
	instagram: string;
	facebook: string | null;
	youtube: string | null;
	whatsapp: string | null;
	telegram: string | null;
	phone_one: string;
	phone_two: string;
	email: string;
	address: string;
	copyright_text: string;
}

export const getFooterData = async (): Promise<IFooterData> => {
	const response = await axiosInstance.get<IFooterData>("footer");
	return response.data;
};
