export const executeApiCall = () => {
	return "";
};
// export const executeApiCall = async (url: string, postObject: kciTypes.executionOptions) => {
//     let dto = { executeOptions: postObject };
//     const response = await fetch(url, {
//         method: "POST",
//         mode: "cors",
//         cache: "no-cache",
//         credentials: "include",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         redirect: "follow",
//         referrerPolicy: "no-referrer",
//         body: JSON.stringify(dto),
//     });
//     let data = await response.json();
//     let parsedData: any[] = [];
//     (data.d.Data as []).forEach((set) => {
//         parsedData.push(JSON.parse(set));
//     });
//     data.d.Data = parsedData;
//     return data.d as kciTypes.executionResults;
// };

// export const getObjectClone = (props: kciTypes.appField) => {
//     const matchValue: string = props.objectState[props.matchPropertyName];
//     const objectClone = props.objectArrayClone.find((i) => {
//         return i[props.matchPropertyName] === matchValue;
//     }) || {};
//     return objectClone;
// };
