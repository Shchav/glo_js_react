import { render } from "./render"

export const sortUsers = () => {
    const headerSortIsChildren = document.getElementById('sort-is-children');

    let isSort = false;

    headerSortIsChildren.style.cursor = 'pointer'

    // getSortUsers

    headerSortIsChildren.addEventListener('click', () => {
        userService.getSortUsers({
            name: `${isSort ? '' : '-'}children`,
            value: null
        }).then(users => {
            render(users);
        })

        isSort = !isSort
    })

}