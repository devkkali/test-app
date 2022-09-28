const UserLayout = ({ children }) => {
    const { settings, saveSettings } = useSettings()
    return (
        <>
            {children}
        </>
    )

}
export default UserLayout