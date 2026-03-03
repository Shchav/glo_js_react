export class UserService {

    errorNotification = document.getElementById('error-notification')

    getUsers() {
        return this.sendDataOverNet({})
    }
    addUser(user) {
        return this.sendDataOverNet({ method: 'POST', body: JSON.stringify(user) })
    }
    removeUser(id) {
        return this.sendDataOverNet({ method: 'DELETE', params: `/${id}` })

    }
    changeUser(id, data) {
        return this.sendDataOverNet({
            method: 'PATCH',
            params: `/${id}`,
            body: JSON.stringify(data)
        })
    }
    getUser(id) {
        return this.sendDataOverNet({ params: `/${id}` })
    }
    editUser(id, user) {
        return this.sendDataOverNet({
            method: 'PUT',
            params: `/${id}`,
            body: JSON.stringify(user)
        })
    }
    filterUsers(filterOption) {
        return this.sendDataOverNet({ params: `?${filterOption}=true` })
    }
    getSortUsers(sortOption) {
        return this.sendDataOverNet({ params: `?_sort=${sortOption.name}` })
    }
    getSearchUsers(str) {
        return this.sendDataOverNet({ params: `?_sort=${sortOption.name}` })
    }

    sendDataOverNet(
        {
            url = 'http://localhost:4545/users',
            params = '',
            method,
            headers = { "Content-Type": "application/json" },
            body
        }) {
        this.errorNotification.textContent = ''
        console.log(`${url}${params}`);

        return fetch(`${url}${params}`,
            {
                method,
                headers,
                body
            })
            .then(res => res.json())
            .catch(error => {
                console.log(error);

                this.errorNotification.textContent = 'Произошла ошибка, данных нет!'
            })
    }
    getDataFromNet(url) {

    }


}