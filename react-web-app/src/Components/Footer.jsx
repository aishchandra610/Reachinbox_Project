import styles from './Footer.module.css'; 

function Footer() {
    return (
        <div className={styles.customFooter}>
            <span>© {new Date().getFullYear()} ReachInbox. All rights reserved.</span>
        </div>
    );
}

export default Footer;
