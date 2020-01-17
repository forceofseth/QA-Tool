import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import moment from "moment";
import {Link} from "react-router-dom";
import {COMMENTS, EDIT_CASE, LEAD_CHECKS, WEB_CHECKS} from "../../../constants/routes";
import LaunchIcon from "@material-ui/icons/Launch";
import {ChatBubbleOutline} from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";

function HomeTableRow(props) {
    const {singleCase} = props;

    return (
        <tr key={singleCase.id}>
            <td data-label="ID">{singleCase.projectId}</td>
            {singleCase.approved ?<td data-label="Approved" className="centeredTableElement"><CheckCircleOutlineIcon className="approved"/></td>:
                <td data-label="Approved" className="centeredTableElement"><HighlightOffIcon className="notApproved"/></td>
            }
            <td data-label="Customer">{singleCase.customer}</td>
            <td data-label="Date">{moment(singleCase.date.toDate()).format('DD.MM.YY')}</td>
            <td data-label="Product">{singleCase.product}</td>

            <td data-label="Lead">
                <Link to={LEAD_CHECKS + "/" + singleCase.id}>
                    <div>{singleCase.lead}
                        <LaunchIcon className="openLink" />
                    </div>
                </Link>
            </td>

            <td data-label="Web">
                <Link to={WEB_CHECKS + "/" + singleCase.id}>
                    <div>{singleCase.web}
                        <LaunchIcon className="openLink" />
                    </div>
                </Link>
            </td>
            <td className="commentIcon" data-label="Comments">
                <Link to={COMMENTS + "/" + singleCase.id}>
                    <ChatBubbleOutline/>
                    {singleCase.commentCounter ?
                        <div className="commentCounter">{singleCase.commentCounter}</div>:
                        <div className="commentCounter">0</div>
                    }
                </Link>
            </td>
            <td className="editLabel centeredTableElement" data-label="Edit">
                <Link to={EDIT_CASE + "/" + singleCase.id}>
                    <EditIcon fontSize="small"/>
                </Link>
            </td>
            <td className="archive centeredTableElement" data-label="Archive">
                <Checkbox defaultChecked={singleCase.archived}
                          onChange={() => props.updateCaseArchiveState(singleCase.id)}
                          value="primary"
                          color="primary"
                />
            </td>
        </tr>
    )
}

export default HomeTableRow;
