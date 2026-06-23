import { useState, useEffect } from "react";

function Settings() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [settings, setSettings] =
    useState({
      name: user?.name || "",
      email: user?.email || "",
      emailNotifications: true,
      browserNotifications: true,
      defaultReminderDays: 3,
      defaultResume: "",
      defaultCoverLetter: "",
    });

  useEffect(() => {
    const saved = localStorage.getItem(
      "tracknestSettings"
    );

    if (saved) {
      const parsed =
        JSON.parse(saved);

      setSettings({
        ...parsed,
        name:
          user?.name ||
          parsed.name,
        email:
          user?.email ||
          parsed.email,
      });
    }
  }, []);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setSettings({
      ...settings,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "tracknestSettings",
      JSON.stringify(settings)
    );

    alert("Settings saved!");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <h1
        className="text-4xl"
        style={{
          fontFamily: "Outfit",
          fontWeight: 600,
        }}
      >
        Settings
      </h1>

      {/* Profile */}
      <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">
          Profile
        </h2>

        <input
          type="text"
          name="name"
          value={settings.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border rounded-xl p-3"
        />

        <input
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">
          Notifications
        </h2>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={
              settings.emailNotifications
            }
            onChange={handleChange}
          />
          Email Notifications
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="browserNotifications"
            checked={
              settings.browserNotifications
            }
            onChange={handleChange}
          />
          Browser Notifications
        </label>

        <select
          name="defaultReminderDays"
          value={
            settings.defaultReminderDays
          }
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        >
          <option value={1}>
            1 day before
          </option>
          <option value={3}>
            3 days before
          </option>
          <option value={7}>
            7 days before
          </option>
        </select>
      </div>

      {/* Resume Preferences */}
      <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">
          Resume Preferences
        </h2>

        <input
          type="text"
          name="defaultResume"
          value={
            settings.defaultResume
          }
          onChange={handleChange}
          placeholder="Default Resume Name"
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          name="defaultCoverLetter"
          value={
            settings.defaultCoverLetter
          }
          onChange={handleChange}
          placeholder="Default Cover Letter Name"
          className="w-full border rounded-xl p-3"
        />
      </div>

      <button
        onClick={handleSave}
        className="px-6 py-3 bg-black text-white rounded-2xl"
      >
        Save Settings
      </button>
    </div>
  );
}

export default Settings;