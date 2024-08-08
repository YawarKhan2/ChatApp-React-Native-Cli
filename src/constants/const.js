
const API_URL = "http://maliksaim721-56747.portmap.host:56747/api"

const onboardingData = [
    {
        "id": 1,
        image  : require('../assets/images/onboarding1.png'),

    },
    {
        "id": 2,
        image  : require('../assets/images/onboarding2.png'),
        
    },
    {
        "id": 3,
        image  : require('../assets/images/onboarding3.png'),
        
    }
]

const messages = [
    {
        id: 1,
        type: "sent",
        text: "Hello, how are you?",
        timestamp: "2024-08-08T10:00:00Z"
    },
    {
        id: 2,
        type: "received",
        text: "I'm good, thanks! How about you?",
        timestamp: "2024-08-08T10:01:00Z"
    },
    {
        id: 3,
        type: "sent",
        text: "I'm doing well, thanks for asking!",
        timestamp: "2024-08-08T10:02:00Z"
    },
    {
        id: 4,
        type: "received",
        text: "Great to hear! Do you have any plans for the weekend?",
        timestamp: "2024-08-08T10:03:00Z"
    },
    {
        id: 5,
        type: "sent",
        text: "Not yet, but I'm thinking about going hiking. How about you?",
        timestamp: "2024-08-08T10:04:00Z"
    },
    {
        id: 6,
        type: "received",
        text: "That sounds fun! I'm planning to relax at home and maybe catch up on some reading.",
        timestamp: "2024-08-08T10:05:00Z"
    },
    {
        id: 7,
        type: "received",
        text: "Sounds Good?",
        timestamp: "2024-08-08T10:05:00Z"
    }
];

export default {API_URL , onboardingData , messages};