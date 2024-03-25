
import React, { useState } from "react";

const jsonData = [
  {
    id: 1,
    name: "this pc",
    children: [
      {
        id: 2,
        name: "Localdisk C",
        children: [
          { id: 8, name: "windows", children: [] },
          { id: 9, name: "users", children: [] },
          { id: 10, name: "programs", children: [] },
          { id: 11, name: "documents", children: [] }
        ]
      },
      { 
        id: 3, 
        name: "Localdisk D", 
        children: [
          { id: 12, name: "movies", children: [] },
          { id: 13, name: "songs", children: [] },
          { id: 14, name: "videos", children: [] },
          { id: 15, name: "documents", children: [] }
        ] 
      }
    ]
  },
  {
    id: 4,
    name: "desktop",
    children: [
      {
        id: 5,
        name: "Attachments",
        children: [
          { id: 16, name: "aadharcard", children: [] },
          { id: 17, name: "pancard", children: [] },
          { id: 18, name: "voterid", children: [] },
          { id: 19, name: "Licence", children: [] }
        ]
      },
      {
        id: 6,
        name: "downloads",
        children: [
          { id: 20, name: "vscode", children: [] },
          { id: 21, name: "postman", children: [] },
          { id: 22, name: "nodejs", children: [] },
          { id: 23, name: "express", children: [] }
        ]
      },
      {
        id: 7,
        name: "Albums",
        children: [
          { id: 24, name: "naveen", children: [] },
          { id: 25, name: "kaviya", children: [] },
          { id: 26, name: "shanmugam", children: [] },
          { id: 27, name: "vimala", children: [] }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "users",
    children: [
      {
        id: 9,
        name: "user1",
        children: [
          { id: 28, name: "general", children: [] },
          { id: 29, name: "settings", children: [] },
          { id: 30, name: "privacy", children: [] },
          { id: 31, name: "logout", children: [] }
        ]
      },
      {
        id: 10,
        name: "user2",
        children: [
          { id: 32, name: "general", children: [] },
          { id: 33, name: "settings", children: [] },
          { id: 34, name: "privacy", children: [] },
          { id: 35, name: "logout", children: [] }
        ]
      },
      {
        id: 11,
        name: "user3",
        children: [
          { id: 36, name: "general", children: [] },
          { id: 37, name: "settings", children: [] },
          { id: 38, name: "privacy", children: [] },
          { id: 39, name: "logout", children: [] }
        ]
      }
    ]
  }
];


const TreeView = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState([]);

  const handleToggle = (nodeId) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter(id => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const renderNode = (node) => {
    const isExpanded = expandedNodes.includes(node.id);

    return (
      <div key={node.id} style={{ marginLeft: 20 }}>
        <div onClick={() => handleToggle(node.id)} >
          {node.name}
        </div>
        {isExpanded && node.children.map(child => renderNode(child))}
      </div>
    );
  };

  return (
    <div>
      {data.map(root => renderNode(root))}
    </div>
  );
};

const Hierchy = () => {
  return (
    <div>
      <h1>Tree View Component</h1>
      <TreeView data={jsonData} />
    
    </div>
  );
};




export default Hierchy;
