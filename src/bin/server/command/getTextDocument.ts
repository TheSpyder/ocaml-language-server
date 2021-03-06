import * as LSP from "vscode-languageserver-protocol";
import Session from "../session";

export default async function(session: Session, event: LSP.TextDocumentIdentifier): Promise<null | LSP.TextDocument> {
  return session.synchronizer.getTextDocument(event.uri);
}
