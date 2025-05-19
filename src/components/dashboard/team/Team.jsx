import styles from './team.module.css';

const Team = () => {
    return (
        <aside className={styles.team}>
            <section className={styles.createTeam}>
                <div className={styles.createTBtn}>
                    <button>Add A Team Member</button>
                </div>
            </section>
            <section className={styles.team2}>

            </section>
            
        </aside>
    );
};

export default Team;