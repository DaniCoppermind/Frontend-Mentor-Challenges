import { users } from './data/mocks/users.json'
import renderContent from './helpers/render.jsx'

function App() {
  let notificationsQuantity = 3

  return (
    <>
      <header className='flex justify-between'>
        <div className='flex'>
          <h1>Notifications</h1>
          <p>{notificationsQuantity}</p>
        </div>
        <button>Mark all as read</button>
      </header>

      <main>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} alt={user.name} />
              {renderContent(user)}
              <p>{user.time}</p>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
