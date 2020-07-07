import Link from 'next/link'

export default function Home() {
      return(
        <div>
          <h2>This is the Home Page</h2>
          <h3>Form here you can check the mobile list by the company name:-</h3><br/>
          <Link href="/apple">
            Apple
          </Link> <br/><br/>
          <Link href="/mi">
            Xiomi
          </Link><br/><br/>
          <Link href="/oopo">
            Oppo
          </Link><br/><br/>
          <Link href="/realme">
            Realme
          </Link><br/><br/>
          <Link href="/samsung">
            Samsung
          </Link><br/><br/>
          <Link href="/apple">
            Apple
          </Link>
          <br/><br/>
          <Link href="/userapi/users">
          Click for Users 
          </Link>
          <h3>Use:-  /Name/City/Aim</h3>
          <h4>In URL you will se the Magic.</h4>
        </div>
      )
}