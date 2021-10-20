import styles from './styles.module.scss';

export function LoginBox(){
  return (
    <div className={styles.loginBoxWrapper}>LoginBox</div>
    <a href="#" className={styles.signInWithGithub}>
      Entrar com o Github.
    </a>
  )
}