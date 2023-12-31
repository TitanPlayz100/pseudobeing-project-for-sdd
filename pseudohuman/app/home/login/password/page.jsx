'use client'

import styles from '@/app/styles/main.module.css';
import { useState } from 'react';

export default function PassInput() {
    const [password, setInput] = useState('');
    const [isWrong, setWrong] = useState(false);
    const [loading, setLoading] = useState(false);

    const setuser = (event) => {
        setInput(event.target.value);
    };

    async function pressedEnter(event) {
        if (event.key != "Enter") { return; }
        setLoading(true);
        const username = localStorage.getItem('tempuser');
        const res = await fetch("/api/check_password", { method: 'POST', body: JSON.stringify({ username, password }) });
        const { result } = await res.json();
        if (result) {
            localStorage.setItem('username', username);
            localStorage.removeItem('tempuser');
            window.location = '/home/mainmenu'
        } else {
            setWrong(true);
            setLoading(false);
        }
    }

    return (
        <div className={styles.loginDiv}>
            <h1 className={styles.loginTextHeader}>Password</h1>
            <p className={styles.loginTextP}>Input your Password. Press ENTER to continue</p>
            <p className={styles.incorrect}>{isWrong ? "Incorrect, try again" : ""}</p>
            <input
                className={styles.loginInput}
                type='password'
                placeholder='Password'
                onChange={setuser}
                onKeyDown={pressedEnter}
                autoFocus
            />
            <p className={styles.loginTextP}>{loading ? "Loading" : ""}</p>
        </div>
    )
}