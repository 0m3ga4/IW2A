import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = [
    { title: "Preparation", steps: [
      { title: "Clean Install", content: "Delete the following folders for a clean install:\n- C:\\Program Files (x86)\\Steam\\steamapps\\common\\Fallout 4\n- C:\\Users\\[USERNAME]\\AppData\\Roaming\\Vortex\\fallout4\n- C:\\Users\\[USERNAME]\\AppData\\Local\\Fallout4\n- C:\\Users\\[USERNAME]\\Documents\\My Games\\Fallout4\n\nReplace [USERNAME] with your computer username."
 },
      { title: "Fresh Installation", content: "Download a fresh Fallout 4 installation from Steam. Note: Pirated copies WILL NOT WORK due to fo4down-with-depots requiring steam verification." },
      { title: "Fo4Downgrader", content: "Extract Fo4Downgrader into the game directory so that 'FO4Down.exe' is beside 'Fallout4.exe'. (Typically C:\\Program Files (x86)\\Steam\\steamapps\\common\\Fallout 4)\n\nDownload from: <a href='https://www.nexusmods.com/fallout4/mods/81630' target='_blank' rel='noopener noreferrer'>https://www.nexusmods.com/fallout4/mods/81630</a>",
mediaUrl: "https://i.imgur.com/QJuW9hI.png" },
      { title: "Downgrade", content: "Run 'Downgrade By Downloading Depots.bat' from Fallout 4 Downgrader. In the advanced tab, enable options 1, 2, and 4. Run the application. Your Fallout should now be ver.1.10.163.0",
 mediaUrl: "https://i.imgur.com/ekPvcoO.png" },
      { title: "First Launch", content: "Open 'Fallout4Launcher.exe' and continue until you reach the main menu. Then close the game." },
      { title: "Script Extender", content: "Download 'Fallout 4 Script Extender (F4SE) Version 0.6.23' (Compatible with runtime 1.10.163). Extract it so that 'f4se_loader.exe' is in the same location as your 'Fallout4.exe' and 'FO4Down.exe'\n\nDownload from: <a href='https://www.nexusmods.com/fallout4/mods/42147?tab=files' target='_blank' rel='noopener noreferrer'>https://www.nexusmods.com/fallout4/mods/42147?tab=files</a>",
mediaUrl: "https://i.imgur.com/7GiMB95.png"  },
      { title: "Launch Test", content: "From now on, launch the game via 'f4se_loader.exe'. Test this now to see if the game successfully launches." }
    ]},
    { title: "Installation", steps: [
      { title: "Vortex Cleanup", content: "In Vortex:\n1. Delete all plugin rules. (Plugins -> Manage Rules -> Click the minus (-) button on every rule.) \n2. Reset all plugin groups. (Plugins -> Manage groups -> Right click in the blank space in the web and press reset -> revert and remove). \n3. Delete current collection (choose 'Delete mods. Keep archives' when prompted)\n4. Delete profile",
mediaUrl: "https://i.imgur.com/r2DBkLc.gif" },
      { title: "IW2A Download and New Profile", content: "1. Download IW2A via Vortex.\n2. Install as new profile and wait for completion. Skip optional files for now." },
      { title: "Additional Mods", content: "Install the following mods:\n- <a href='https://www.loverslab.com/files/file/3949-strap-ons-of-fallout-4/' target='_blank' rel='noopener noreferrer'>VIO_Strap-on v3.7z</a>\n- <a href='https://www.loverslab.com/files/file/18178-aaf-nuka-ride-a-porn-studio-mod/' target='_blank' rel='noopener noreferrer'>Nuka Ride 6.7 - Voices 1.5.7z</a>\n- <a href='https://www.loverslab.com/files/file/18178-aaf-nuka-ride-a-porn-studio-mod/' target='_blank' rel='noopener noreferrer'>Nuka Ride 6.7.6.7z</a>\n- <a href='https://www.loverslab.com/files/file/11260-meet-companion-ivy/' target='_blank' rel='noopener noreferrer'>CompanionIvy6.1.7z</a>\n- <a href='https://www.loverslab.com/files/file/11260-meet-companion-ivy/' target='_blank' rel='noopener noreferrer'>CompanIvy_Nuka6.7z</a>\n- <a href='https://discord.gg/QbByC8GV' target='_blank' rel='noopener noreferrer'>AAF_V171-0+beta.7z</a> (In aaf_public_release channel, after clicking the nuke reaction emoji in rules)" },
      { title: "Plugin Setup", content: "1. In Vortex Notifications, allow Companion Ivy to enable multiple ESP's\n2. Ignore other notification errors for now\n3. Go to plugins tab and manually enable 'Nuka Ride.esp' and 'Nuka Ride - Start Me Up Patch.esp' if necessary" },
      { title: "Recommended Mods", content: "1. Go to Collection -> Mods -> Filter for 'Recommended'\n2. Select all and click install\n3. Skip any mods from the Additional Mods step\n4. For external links, click 'continue' and download the exact file name and version specified" },
      { title: "Cleanup", content: "1. Go to Collections -> Mods -> Filter for 'Not installed' and 'Recommended'\n2. Ignore mods from the Additional Mods step\n3. Ensure all other mods are installed or install them manually\n4. Click 'ignore' for installed mods" },
      { title: "Deploy", content: "In mods tab, click deploy and wait for completion. The collection should now be marked as Enabled at 100% completion." }
    ]},
    { title: "Vortex Notifications/Errors", steps: [
      { title: "File Conflicts", content: "1. In Vortex notifications, resolve 'unresolved file conflicts'\n2. Set 'bodyslide-backed-body-big.zip' and 'IW2 - Adult - Setup Settings.zip' to AFTER ALL\n3. Set 'Invictusblade's Custom Overlays' to BEFORE ALL\n4. Click save" },
      { title: "Plugin Sorting", content: "1. Resolve 'Plugins not sorted because of cyclic rules'\n2. You should see the following cyclic rules:\n   - Diverse body - Maim2 - Compatability Patch ESL Tag.esp\n   - 'Flashy_CrimeAndPunishment.esp'\n   - 'RED-CAP.esp'\n   - 'DiverseBodies.esp'\n3. Select 'DiverseBodies.esp' and click apply" },
      { title: "Final Deployment", content: "1. Go to the mods tab, click 'Deploy Mods'\n2. Go to the plugins tab, click 'Sort Now'\n3. Cyclic Rule Conflicts should now be absent" }
    ]},
    { title: "First Time Playing", steps: [
      { title: "Launch", content: "Launch the game via F4SE (never steam or the default game launcher) and click new game. Magno GAUDIO will appear and ask whether to activate or not. Click Activate Now. Click OK to any further popups." },
      { title: "Initial Setup", content: "1. After character customization, do not move away from the mirror until the notifications stop appearing in the top left.\n2. THE GAME MAY FREEZE OR LAG DURING THIS PROCESS. This is normal.\n3. Click OK to any further popups.\n4. After the notifications stop displaying, walk out the door and complete your introduction or custom start settings." },
      { title: "Commonwealth Start", content: "Upon standing outside Vault 111 in the commonwealth (or wherever you chose to start), stand idle until a number of popups appear. Select the options as they appear:\n- Start Crime and Punishment Now, Reputation Mode, Yes Allow Game Events Rep at 0\n- For crime and punishment yes or no questions about Diamond City, answer 'No or haven't been to DC yet' for all\n- Desired Spawn rate = Default\n- Some time later you may get a quest M1A, or after visiting Vault111 and leaving. Select 'Quest at level 25'" },
      { title: "Mod Configuration", content: "1. Open the game menu and click 'MOD CONFIG'\n2. Click the top tab on the left 'MCM Settings Manager'\n3. Look under presets for 'IW2 - Adult' and click apply on this preset\n4. Go to Advanced Needs 76 -> Needs System -> 'Click here to enable advanced needs'. Nothing will appear to happen, but one click is enough.\n5. Go to Magnum cum Gaudio -> Hotkeys and Widgets -> Click apply on all three widgets (Lust, Infamy, Wear). The values for this HUD element may need adjustment based on your monitor or preferences." },
      { title: "Final Setup", content: "1. Open every page in the Mod Config menu to find and assign hotkeys, as well as change settings to suit your personal preference.\n2. When done, close the mod menu and wait for the notification from Advanced Needs that it has enabled.\n3. Save the game." },
      { title: "Tip", content: "It is wise to enter Vault 111 as there is a table with some starting medical supplies that will be crucial to your survival inside it. The table is located outside the room with the electrical arcs and roaches. Further medical supplies will be difficult to obtain until you unlock the medic perks." }
    ]}
  ];

  const createMarkup = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${htmlContent}</div>`, 'text/html');
    doc.querySelectorAll('a').forEach(link => {
      link.classList.add('link-style');
    });
    return { __html: doc.body.innerHTML };
  };

  const renderMedia = (mediaUrl) => {
    if (!mediaUrl) return null;
    const isVideo = mediaUrl.endsWith('.mp4');
    return isVideo ? (
      <video controls src={mediaUrl} style={{ width: '100%' }} />
    ) : (
      <img src={mediaUrl} alt="Media content" style={{ width: '100%' }} />
    );
  };

  const jumpToStep = (categoryIndex, stepIndex) => {
    setCurrentCategory(categoryIndex);
    setCurrentStep(stepIndex);
  };

  const nextStep = () => {
    if (currentStep < categories[currentCategory].steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      setCurrentStep(categories[currentCategory - 1].steps.length - 1);
    }
  };

  const isStepComplete = (categoryIndex, stepIndex) => {
    if (categoryIndex < currentCategory) return true;
    if (categoryIndex === currentCategory && stepIndex < currentStep) return true;
    return false;
  };

  // Ensure this entire block is properly nested within the component function
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Index</h2>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <ul>
              {category.steps.map((step, stepIndex) => (
                <li
                  key={stepIndex}
                  className={`
                    flex items-center py-1 px-2 rounded cursor-pointer
                    ${categoryIndex === currentCategory && stepIndex === currentStep ? 'bg-blue-600' : ''}
                    ${isStepComplete(categoryIndex, stepIndex) ? 'text-green-400' : ''}
                  `}
                  onClick={() => jumpToStep(categoryIndex, stepIndex)}
                >
                  {isStepComplete(categoryIndex, stepIndex) && <CheckCircle className="mr-2 h-4 w-4" />}
                  {step.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex-grow flex flex-col p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4">IW2A Install Guide</h1>
        <div className="bg-gray-800 rounded-lg p-8 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-4">{categories[currentCategory].steps[currentStep].title}</h2>
          <div className="whitespace-pre-wrap mb-4" dangerouslySetInnerHTML={createMarkup(categories[currentCategory].steps[currentStep].content)}></div>
          {renderMedia(categories[currentCategory].steps[currentStep].mediaUrl)}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentCategory === 0 && currentStep === 0}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              <ChevronLeft className="mr-2" />
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={currentCategory === categories.length - 1 && currentStep === categories[currentCategory].steps.length - 1}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          Step {currentStep + 1} of {categories[currentCategory].steps.length} | {categories[currentCategory].title}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;