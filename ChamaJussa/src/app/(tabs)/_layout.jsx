import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#C0191F",
        tabBarInactiveTintColor: "#282F32",
        tabBarStyle: {
          height: 95,
          paddingBottom: 8,
          paddingTop: 6,
          borderTopWidth: 1,
          borderTopColor: "#686F73",
          backgroundColor: "#768085",
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Minhas OS",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="criarOS"
        options={{
          title: "CriarOS",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="detalheOS"
        options={{
          title: "Detalhes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="arrow-up-right-box-outline" size={size} color={color} />
          ),
        }}
      /> */}
      
      <Tabs.Screen
        name="painelNotificacoes"
        options={{
          title: "Notificacoes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    
      
    </Tabs>
  );
}