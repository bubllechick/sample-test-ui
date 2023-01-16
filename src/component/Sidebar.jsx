
import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {
    return (
        <>
            <CDBSidebar>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Logo</CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="cog">Setting</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="user-alt" iconType="solid">
                            User
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                </CDBSidebarFooter>
            </CDBSidebar>
        </>
    )
}

export default Sidebar
