import styles from './page.module.css';
import Layout from './layout';

export default function Home() {
return (
    <Layout>
    <main className={styles.main}>
        <h1>Prova B2 WEB</h1>
        <div className={styles.cardBranco}>
            <a href="/login"><div className={styles.card}>Login</div></a>
            <a href="/registro"><div className={styles.card}>Criar conta</div></a>
            <a href="/recover" className={styles.subtitulo}>Esqueci minha senha</a>
        </div>
        <div className={styles.footer}>
            <p>A UVV contratou a turma de Programação Avançada para WEB para desenvolver um sistema para gerenciar o Inova Week. Você foi solicitado, como membro do projeto, a desenvolver as seguintes telas, usando o NextJS.</p>
        </div>
            
    </main>
    </Layout>
);
}
