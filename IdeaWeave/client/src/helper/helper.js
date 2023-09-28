import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
// ** Functions **

// Authenticate
export async function authenticate(username) {
    try {
        return await axios.post('/api/authenticate', { username });
    } catch (error) {
        return { error: "Username doesn't exist" };
    }
}

// Get user details
export async function getUser(username) {
    try {
        const { data } = await axios.get(`/api/user/${username}`);
        return { data };
    } catch (error) {
        return { error: "User not found" };
    }
}

// Register User
export async function registerUser(credentials) {
    try {
        const { data: { msg }, status } = await axios.post(`/api/register`, credentials);
        const { username, email } = credentials;

        // Send email
        if (status === 201) {
            await axios.post('/api/registerMail', { username, userEmail: email, text: msg });
        }
        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error });
    }
}

// Login
export async function login(username, password) {
    try {
        const { data } = await axios.post('/api/login', { username, password });
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({ error: "Login failed" });
    }
}

// Update User profile
export async function updateUser(response) {
    try {
        const token = localStorage.getItem('token');
        const data = await axios.put('/api/updateuser', response, { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({ error: "Couldn't update profile" });
    }
}

// Generate OTP
export async function generateOTP(username) {
    try {
        const { data: { code }, status } = await axios.get('/api/generateOTP', { params: { username } });

        // Send Email with OTP
        if (status === 201) {
            const { data: { email } } = await getUser(username);
            const text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('/api/registerMail', { username, userEmail: email, text, subject: "Password Recovery OTP" });
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

// Verify OTP
export async function verifyOTP(username, code) {
    try {
        const { data, status } = await axios.get('/api/verifyOTP', { params: { username, code } });
        return { data, status };
    } catch (error) {
        return Promise.reject(error);
    }
}

// Reset Password
export async function resetPassword(username, password) {
    try {
        const { data, status } = await axios.put('/api/resetPassword', { username, password });
        return { data, status };
    } catch (error) {
        return Promise.reject({ error });
    }
}
