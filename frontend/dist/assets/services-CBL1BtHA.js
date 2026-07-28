import { n as apiClient } from "./axios-DwDgploX.js";
//#region src/api/services.js
var authAPI = {
	signup: (data) => apiClient.post("/api/auth/signup", data),
	sendOtp: (gmail) => apiClient.post("/api/auth/send-otp", { gmail }),
	verifyOtp: (gmail, otp) => apiClient.post("/api/auth/verify-otp", {
		gmail,
		otp
	}),
	login: (username, password) => {
		const form = new URLSearchParams();
		form.append("username", username);
		form.append("password", password);
		return apiClient.post("/api/auth/login", form, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
	},
	forgotPassword: (gmail) => apiClient.post("/api/auth/forgot-password", { gmail }),
	resetPassword: (gmail, otp, new_password) => apiClient.post("/api/auth/reset-password", {
		gmail,
		otp,
		new_password
	})
};
var healthAPI = {
	uploadHealthData: (data) => apiClient.post("/api/health/upload-health-data", data),
	getHistory: () => apiClient.get("/api/health/history")
};
var reportsAPI = {
	generateReport: () => apiClient.post("/api/reports/generate-report"),
	downloadReport: (id) => apiClient.get(`/api/reports/download-report/${id}`, { responseType: "blob" }),
	sendReport: (id) => apiClient.post(`/api/reports/send-report/${id}`)
};
//#endregion
export { healthAPI as n, reportsAPI as r, authAPI as t };
