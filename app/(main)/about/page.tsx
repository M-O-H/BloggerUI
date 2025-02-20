import styles from './about.module.css'

export default function AboutPage() {
  return (
    <main className={styles.aboutContainer}>
      {/* Left side content */}
      <div className={styles.leftContent}>
        <div className={styles.dateSection}>
          <span>Series</span>
          <span>— 00</span>
        </div>
        <h1 className={styles.title}>About</h1>
      </div>

      {/* Right side content */}
      <div className={styles.rightContent}>
        <p className={styles.mainText}>
          DevShare is a space where developers, computer scientists, and tech enthusiasts come together to share knowledge, experiences, and ideas. We believe in the power of community-driven learning and the importance of making technical knowledge accessible to everyone. From cutting-edge development practices to fundamental computer science concepts, our platform serves as a bridge connecting passionate minds in technology.
        </p>

        <div className={styles.infoSection}>
          {/* Community section */}
          <div className={styles.jobSection}>
            <p className={styles.jobText}>
              Join our growing community of tech enthusiasts. Whether you're a seasoned developer, a computer science student, or someone passionate about technology, we welcome your unique perspectives and experiences. Share your knowledge, learn from others, and be part of meaningful technical discussions that shape the future of technology.
            </p>
            <a href="#" className={styles.link}>Join our community <span>→</span></a>
          </div>

          {/* Contact information */}
          <div className={styles.contactSection}>
            <p>DevShare<br />Tech Community Hub<br />San Francisco</p>
            <a href="mailto:connect@devshare.dev" className={styles.link}>connect@devshare.dev</a>
            <div className={styles.newsSection}>
              <a href="#" className={styles.link}>Latest Articles <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
