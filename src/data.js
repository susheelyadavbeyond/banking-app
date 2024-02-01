const DATA = [
    {
        email: "admin@admin.com",
        password: "abc123",
        fullname: "Admin Account",
        type: "Savings Peso",
        number: "47290539480",
        balance: 1000,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "jeff@gmail.com",
        password: "abc123",
        fullname: "Jeffrey de Lara",
        type: "Savings Peso",
        number: "47290539481",
        balance: 1029300.43,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "jeff2@gmail.com",
        password: "abc123",
        fullname: "Juan dela Cruz",
        type: "Savings Peso",
        number: "47290539482",
        balance: 392830.22,
        isAdmin: false, 
        budget: [
            {
                title: "Tuition fee",
                amount: 12000
            },
            {
                title: "Food take out during the pandemic",
                amount: 4000
            }
        ], 
        transactions: [
            {
                title: "Fund transfer", 
                amount: 2000,
                type: "debit", 
                date: "October 1, 2021"
            }, 
            {
                title: "Withdraw", 
                amount: 10000, 
                type: "debit",
                date: "October 1, 2021"
            }
        ]
    },
    {
        email: "user24@gmail.com",
        password: "abc123",
        fullname: "Peter de Castro",
        type: "Savings Peso",
        number: "47290539483",
        balance: 102938.34,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "user34@gmail.com",
        password: "abc123",
        fullname: "Noli Enriquez",
        type: "Checking Peso",
        number: "47290539484",
        balance: 837495.38, 
        isAdmin: false, 
        transactions: []
    },

    {
        email: "derek@gmail.com",
        password: "abc123",
        fullname: "Karen Davila",
        type: "Checking Peso",
        number: "47290539485",
        balance: 574839.58, 
        isAdmin: false, 
        transactions: []
    },
    {
        email: "client@client.com",
        password: "abc123",
        fullname: "Client Demo Account",
        type: "Savings Peso",
        number: "47290539486",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "ritu.gupta@aimbeyond.com",
        password: "ritu@2024",
        fullname: "Ritu Gupta",
        type: "Savings Peso",
        number: "47290539487",
        balance: 10000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "rohit.verma@aimbeyond.com",
        password: "rohit@2024",
        fullname: "Rohit Verma",
        type: "Savings Peso",
        number: "47290539488",
        balance: 10000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "dexter@getsmarteye.com",
        password: "dexter@2024",
        fullname: "Dexter Caffey",
        type: "Savings Peso",
        number: "47290539500",
        balance: 1000000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "sukanya@getsmarteye.com",
        password: "sukanya@2024",
        fullname: "Sukanya Bhowmik",
        type: "Savings Peso",
        number: "47290539489",
        balance: 100000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "jitendra.chaudhary@aimbeyond.com",
        password: "jitendra@2024",
        fullname: "Jitendra Chaudhary",
        type: "Savings Peso",
        number: "47290539505",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "sandeep.ratnakar@aimbeyond.com",
        password: "sandeep@2024",
        fullname: "Sandeep Ratnakar",
        type: "Savings Peso",
        number: "47290539506",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "nitika.kohli@aimbeyond.com",
        password: "nitika@2024",
        fullname: "Nitika Kohli",
        type: "Savings Peso",
        number: "47290539507",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    },
	{
        email: "susheel.yadav@aimbeyond.com",
        password: "susheel@2024",
        fullname: "Susheel Yadav",
        type: "Savings Peso",
        number: "47290539508",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    }
	
];

export default DATA;
