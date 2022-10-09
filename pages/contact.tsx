import type {NextPage} from 'next'



const Form: NextPage = () => {
  return <form action="/api/form" method="POST">
      <div>
          <label htmlFor="first-name">First Name</label>
          <input type="first-name" autoComplete="first-name" name="first-name" required={true}/>
          <label htmlFor="last-name">Last Name</label>
          <input type="last-name" autoComplete="last-name" name="last-name" required={true}/>
          <label htmlFor="email">Email</label>
          <input type="email" autoComplete="email" name="email" required={true}/>
          <label htmlFor="Comment">Comment</label>
          <input type="comment" autoComplete="comment" name="comment" required={true}/>
      </div>
      <button>Submit</button>
  </form>
}




export default Form

