import Layout from "../components/Layout";
import {useContext, useEffect, useState} from "react";
import {AuthContext, useAuth} from "../context/AuthContext";
import {Logout} from "../components/Logout";

export function Dashboard() {
  const {user} = useAuth();

  return (
    <Layout>
      <div>
        <div>
          <h2>Dashboard</h2>
        </div>
        {user && (<div>{user.email}</div>)}
        <div>
          <Logout />
        </div>
      </div>
    </Layout>
  );
}