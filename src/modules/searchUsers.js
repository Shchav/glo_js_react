import { debounce } from "./helpers"
import { render } from "./render"

export const searchUsers = () => {
    const input = document.getElementById('search-input')

    const debounceSearch = debounce(() => {
        userService.getSearchUsers(input.value).then(users => {
            render(users);
        })
    }, 500)

    input.addEventListener('input', debounceSearch)
}