## The Wild Oasis

### About:
The Wild Oasis hotel management app that allows hotel employees to manage cabins, bookings, and guests.

You can try here: [https://the-wild-oasis-app-react.netlify.app](https://the-wild-oasis-app-react.netlify.app/)

**For Login use:**

Email Address:
```
test@test.com
```

Password:
```
12345678
```

### Features

1. **User Authentication and Signup:**
   - Hotel employees can log in to the application to perform tasks.
   - New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.

2. **User Profile Management:**
   - Users can upload an avatar to personalize their profile.
   - Users can change their name and password.

3. **Cabin Management:**
   - The app provides a table view with all cabins.
   - The table view displays cabin information, including cabin photo, name, capacity, price, and current discount.
   - Users can update, duplicate or delete existing cabins.
   - Users can create new cabins, including the ability to upload a photo.

4. **Booking Management:**
   - The app provides a table view with all bookings.
   - The table view displays booking information, including arrival and departure dates, booking status, paid amount, cabin details, and guest data.
   - Booking status can be "unconfirmed," "checked in," or "checked out."
   - The table view is filterable by booking status.
   - Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast was booked and its price.

5. **Booking Operations:**
   - Users can delete, check-in, or check out a booking as the guest arrives.
   - On check-in, users can accept payment outside the app and then confirm the payment within the app.
   - Guests can add breakfast for the entire stay during check-in if they hadn't already.

6. **Guest Data Management:**
   - Guest data contains full name, email, national ID, nationality, and a country flag for identification.

7. **Dashboard:**
   - The initial app screen serves as a dashboard displaying important information for the last 7, 30, or 90 days.
   - It shows a list of guests checking in and out on the current day, and users can perform tasks related to these activities from the dashboard.
   - The dashboard provides statistics on recent bookings, sales, check-ins, and occupancy rates.
   - It includes a chart showing all daily hotel sales, distinguishing between "total" sales and "extras" sales (only breakfast at present).
   - There's also a chart displaying statistics on stay durations, an important metric for the hotel.

8. **Application-wide Settings:**
   - Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

---

### Sample task, photo:

**Login page:**

![image](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/d67b07fa-2904-4fa7-aadb-9617c030ae7b)

**Homepage / Dashboard:**

![image](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/1e834830-bec7-4525-8ba6-cda5ee0a0da6)

**Bookings:**

![image](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/c824618a-2599-479a-b645-b9e304059a07)

**Cabins page, Create New cabin, Edit cabin,:**

![image](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/d66817b9-1230-43e6-b2b5-18a3caf32ab1)

![image](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/5c06a159-6fc1-43d2-85ed-1fdb2db82510)

![image](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/2288dc52-7e1d-4e55-8fa2-0352d9a3b6c9)


**Settings page:**

![image](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/3affd26c-ecb7-4b12-9028-2b9dd6e82b91)

**Account page:**

![image](https://github.com/SimAndrew/the-wild-oasis/assets/44125451/da12adec-bf2f-49d2-b8e2-727a51b65b22)

**Light and Dark mode:**

![gif01](https://github.com/SimAndrew/FarAway-TodoList-React/assets/44125451/a9a2d7a0-0c0f-43a9-b608-2bebb8fd3985)

---

### Technologies, Libraries:

- [React JS](https://react.dev/)
- [Vite JS](https://vitejs.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- React Query - Remote state management (CRUD) https://tanstack.com/query
- React Hook Forms - Form management https://react-hook-form.com
- React Router - Routing SPA https://reactrouter.com
- Super Base - Create a back-end with a Postgres database  https://supabase.com/
- Authentication and Authorization
- Filter, Sort, Pagination
- React Icons - Icons https://react-icons.github.io/react-icons/
- React Hot Toast - React notifications https://react-hot-toast.com/
- Recharts - Displaying beautiful charts in UI https://recharts.org/
- date-fns - Date manipulation https://date-fns.org/
- Styled Components - Component-scoped CSS inside JavaScript/React https://styled-components.com/
- React error boundary - https://github.com/bvaughn/react-error-boundary
- Flexbox
- CSS Grid
- Dark mode

### Run the app:

- Clone a project: `git clone`

```
git clone https://github.com/SimAndrew/the-wild-oasis.git
```

- Open project code in your editor.
- Install the dependencies, enter into the terminal:

```
npm install
```

- Run the project, enter into the terminal:

```
npm run dev
```