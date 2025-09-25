import styles from './Register.module.css'
import {useState} from 'react'
import { FaUser, FaLock, FaLockOpen } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log('Cadastrando usuário...')
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }
    
    return(
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias.</p>
            <form >
                <div className={styles.inputContainer}>
                    <FaUser className={styles.icon} />
                    <input type="text"
                    placeholder='Digite seu nome de usuário'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                
                <div className={styles.inputContainer}>
                    <MdEmail className={styles.icon} />
                    <input type="email" 
                    placeholder='Digite seu email'
                    onChange={(e)=> setEmail(e.target.value)} />
                </div>
                
                <div className={styles.inputContainer}>
                    <FaLock className={styles.icon} />
                    <input type="password" 
                    placeholder='Digite sua senha'
                    onChange={(e)=> setPassword(e.target.value)} />
                </div>
                
                <div className={styles.inputContainer}>
                    <FaLockOpen className={styles.icon} />
                    <input type="password" 
                    placeholder='Confirme sua senha' 
                    onChange={(e)=> setConfirmPassword(e.target.value)} />
                </div>
                
                <div className={styles.buttonContainer}>
                    <button onClick={handleSubmit} type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>

    )


}

export default Register;