import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'
export const getStaticProps= async ()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await res.json()
  return{
    props:{
      Ninjas:data
    }
  }
}



const Ninjas = ({Ninjas}) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {Ninjas.map(Ninja=>(
        <Link href={'/ninjas/'+Ninja.id} key={Ninja.id}>
          <a className={styles.single}>
            <h3>{Ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;