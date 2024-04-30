export default function renderContent(user) {
  let content

  if (user.post || user.action) {
    content = (
      <div>
        <p>
          {user.name} {user.action} <a href='#'>{user.post}</a>
        </p>
      </div>
    )
  }

  if (user.message) {
    content = (
      <div>
        <p>
          {user.name} {user.action}
        </p>
        <blockquote>{user.message}</blockquote>
      </div>
    )
  }

  if (user.picture) {
    content = (
      <div>
        <p>
          {user.name} {user.action}
        </p>
        <img src={user.picture} alt={user.name} />
      </div>
    )
  }

  return content
}