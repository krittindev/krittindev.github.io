import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {works, socials} from './data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Wellcome To&nbsp;
          <code className={styles.code}>krittin.dev</code>
        </p>
        <div className="h-24 flex flex-row flex-wrap gap-4 content-evenly">
          {socials.map(function(social, i){
            return <>
              <a
                href={social["url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social["src"]}
                  alt={social["alt"]}
                  className={styles.socialLogo}
                  width={social["size"]}
                  height={social["size"]}
                  priority
                />
              </a>
            </>;
          })}
        </div>
      </div>

      <div className={styles.center}>
        <div className="flex  flex-col md:flex-row-reverse justify-center items-center">
          <Image 
            src="/profile.png"
            alt="Profile"
            className="rounded-full"
            width={500}
            height={500}
            priority
            />
          <div className="my-16 flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-5xl font-bold ml-4">Krittin Kunaree</h1>
            <h6 className="text-xl ml-4"><code className={styles.code}>Mobile App Developer</code></h6>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {works.map((work) => {
          return <>
            <a
              href={work["url"]}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
              {work["title"]}<span>-&gt;</span>
              </h2>
              <p className={inter.className}>
              {work["description"]}
              </p>
            </a>
          </>;
        })}
      </div>
    </main>
  )
}
