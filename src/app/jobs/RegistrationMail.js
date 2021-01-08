import Mail from "../lib/Mail";

export default {
	key: "RegistrationMail",
	options: {
		// delay: 5000,
		priority: 3,
	},
	async handle({ data }) {
		const {
			user: { name, email },
		} = data;
		await Mail.sendMail({
			from: "from@example.com",
			to: "to@example.com",
			subject: `${name}`,
			html: `${email}`,
		});
	},
};
